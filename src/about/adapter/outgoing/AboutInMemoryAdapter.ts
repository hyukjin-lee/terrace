import {AboutLoadPort} from "../../application/port/outgoing/AboutLoadPort";
import {About} from "../../domain/About";

export class AboutInMemoryAdapter implements AboutLoadPort {
  public get = (): Promise<About> => Promise.resolve({
    profile: "https://s.gravatar.com/avatar/afe249c2d2c2c95d078179a42a940c42?s=400#shadow#round",
    name: {
      en: "HyeokJin Lee",
      kr: "이혁진"
    },
    descriptions: [{
      icon: "EmojiPeople",
      label: "Programmer",
      href: ""
    }, {
      icon: "Room",
      label: "Suwon, Korea",
      href: "/places"
    }, {
      icon: "DeveloperBoard",
      label: "Résumé",
      href: ""
    }, {
      icon: "Code",
      label: "github/hyukjin-lee",
      href: "https://github.com/hyukjin-lee"
    }, {
      icon: "Email",
      label: "gogokow27@gmail.com",
      href: "mailto:gogokow27@gmail.com"
    }, {
      icon: "Create",
      label: "blog.hyeokin.lee",
      href: "https://blog.hyeokin.lee"
    },]
  });
}
