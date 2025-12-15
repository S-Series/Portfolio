export const ProjectStatus = {
  PROGRESS: "on-progress",
  SERVICE: "on-service",
  ARCHIVED: "archived",
  DROPPED: "dropped",
};

const ProjectsData = [
  {
    id: "wuwa-dev",
    title: "WuWa DEV",
    subtitle: "WuWa Spec Card Generator",
    description: {
      kr: "OCR 기반으로 인게임 스펙을 분석하고 카드 형태로 시각화하는 웹 서비스입니다.",
      en: "A web service that analyzes in-game stats using OCR and visualizes them as spec cards.",
      jp: "OCRを使ってゲーム内ステータスを解析し、カード形式で可視化するWebサービスです。",
    },
    status: ProjectStatus.SERVICE,

    tech: ["React", "OCR(PaddleOCR)", "Cloudflare R2", "Vercel"],
    thumbnail: "/projects/default.jpg",

    links: {
      service: "https://wuwa.dev",
      github: "https://github.com/S-Series/wuthering",
    },

    period: {
      start: "2024-09",
      end: "2025-12",
    },
  },

  {
    id: "remind",
    title: "Project Re:Mind",
    subtitle: "PC Rhythm Game Project",
    description: {
      kr: "Unity 기반의 PC 리듬게임 프로젝트로, 커스텀 에디터와 서버 연동 구조를 포함한 개인 개발 프로젝트입니다.",
      en: "A PC rhythm game project built with Unity, featuring a custom editor and server-integrated architecture.",
      jp: "UnityをベースにしたPC向けリズムゲームプロジェクトで、カスタムエディタやサーバー連携構造を含む個人開発作品です。",
    },
    status: ProjectStatus.PROGRESS,

    tech: ["Unity", "URP", "ASP.NET Core", "SQLite"],
    thumbnail: "/projects/remind.png",

    links: {
      github: "https://github.com/S-Series/ReMind-Editor-V2",
    },

    period: {
      start: "2022-03",
      end: null,
    },
  },

  {
    id: "portfolio-v2",
    title: "Portfolio V2",
    subtitle: "Personal Website",
    description: {
      kr: "개발과 창작 활동을 정리하고 소개하기 위해 제작 중인 개인 포트폴리오 웹사이트입니다.",
      en: "A personal portfolio website currently in development to showcase development and creative works.",
      jp: "開発や創作活動をまとめて紹介するために制作中の個人ポートフォリオWebサイトです。",
    },
    status: ProjectStatus.PROGRESS,

    tech: ["React", "CSS Grid", "Vercel"],
    thumbnail: "/projects/portfolio.png",

    links: {
      preview: null,
      github: "https://github.com/S-Series/portfolio",
    },

    period: {
      start: "2025-01",
      end: null,
    },
  },
];

export default ProjectsData;
