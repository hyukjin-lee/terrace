import {Container, decorate, inject, injectable} from "inversify";
import {TechPersistenceAdapter} from "./outgoing/TechPersistenceAdapter";
import * as axiosModule from "../../infrastructure/remote-call/inversify";
import {TechService} from "../application/TechService";

const TYPES = {
  TechPersistenceAdapterId: Symbol.for("TechPersistenceAdapter"),
  TechGetUseCaseId: Symbol.for("TechGetUseCase"),
  TechFindAllUseCaseId: Symbol.for("TechFindAllUseCase"),
  TechGetPrevOrNextUseCaseId: Symbol.for("TechGetPrevOrNextUseCase"),
};

export const { TechGetUseCaseId, TechFindAllUseCaseId, TechGetPrevOrNextUseCaseId } = TYPES;

export const decorateClasses = () => {
  decorate(injectable(), TechPersistenceAdapter);
  decorate(inject(axiosModule.AxiosId), TechPersistenceAdapter, 0);

  decorate(injectable(), TechService);
  decorate(inject(TYPES.TechPersistenceAdapterId), TechService, 0);
  decorate(inject(TYPES.TechPersistenceAdapterId), TechService, 1);
};

export const bind = (container: Container) => {
  container.bind(TYPES.TechPersistenceAdapterId).to(TechPersistenceAdapter);
  container.bind(TYPES.TechGetUseCaseId).to(TechService);
  container.bind(TYPES.TechGetPrevOrNextUseCaseId).to(TechService);
  container.bind(TYPES.TechFindAllUseCaseId).to(TechService);
};
