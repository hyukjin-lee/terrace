import {Container, decorate, inject, injectable} from "inversify";
import {BlogPersistenceAdapter} from "./outgoing/BlogPersistenceAdapter";
import * as axiosModule from "../../infrastructure/remote-call/inversify";
import {BlogService} from "../application/BlogService";

const TYPES = {
  BlogPersistenceAdapterId: Symbol.for("BlogPersistenceAdapter"),
  BlogGetUseCaseId: Symbol.for("BlogGetUseCase"),
  BlogFindAllUseCaseId: Symbol.for("BlogFindAllUseCase"),
  BlogGetPrevOrNextUseCaseId: Symbol.for("BlogGetPrevOrNextUseCase"),
};

export const { BlogGetUseCaseId, BlogFindAllUseCaseId, BlogGetPrevOrNextUseCaseId } = TYPES;

export const decorateClasses = () => {
  decorate(injectable(), BlogPersistenceAdapter);
  decorate(inject(axiosModule.AxiosId), BlogPersistenceAdapter, 0);

  decorate(injectable(), BlogService);
  decorate(inject(TYPES.BlogPersistenceAdapterId), BlogService, 0);
  decorate(inject(TYPES.BlogPersistenceAdapterId), BlogService, 1);
};

export const bind = (container: Container) => {
  container.bind(TYPES.BlogPersistenceAdapterId).to(BlogPersistenceAdapter);
  container.bind(TYPES.BlogGetUseCaseId).to(BlogService);
  container.bind(TYPES.BlogGetPrevOrNextUseCaseId).to(BlogService);
  container.bind(TYPES.BlogFindAllUseCaseId).to(BlogService);
};
