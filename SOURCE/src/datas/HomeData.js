const HomeData = {
  kr: [
    // SECTION 1
    {
      id: "home-intro",
      title: "상상을 현실로, SSeries입니다.",
      logoPath: "./sseries.png",
      description: [
        { logoPath: "./logo/dev.png", data: "Developer" },
        { logoPath: "./logo/video.png", data: "Video Creator" },
        { logoPath: "./logo/music.png", data: "Music Creator" },
        { logoPath: "./logo/paint.png", data: "Artist" },
        {
          logoPath: null,
          data: "예술과 창작, 그리고 경험을 제공하는 콘텐츠를 만듭니다.",
        },
      ],
    },

    // SECTION 2
    {
      id: "home-works",
      title: "제 작업물을 소개합니다",
      logoPath: "./logo/work.png",
      description: [
        {
          logoPath: "./logo/works/wuwa.png",
          data: "띵조 DEV (React / OCR / CICD / Cloudflare)",
        },
        {
          logoPath: "./logo/video.png",
          data: "Re:Mind 에디터 및 게임 (Unity / ASP.NET / Cloudflare)",
        },
        {
          logoPath: "./logo/music.png",
          data: "음악 제작 (EDM / Future Core / etc.)",
        },
      ],
    },

    // SECTION 3
    {
      id: "home-about",
      title: "SSeries에 관한 이야기",
      logoPath: null,
      description: [
        {
          logoPath: "./logo/dev.png",
          data: "개발 성향: 구조화·시각적 명확성·사용자 경험 중심의 개발을 지향합니다.",
        },
        {
          logoPath: "./logo/dream.png",
          data: "작업 철학: ",
        },
        {
          logoPath: "./logo/dream.png",
          data: "꿈과 목표: ",
        },
        {
          logoPath: "./logo/dream.png",
          data: "앞으로: ",
        },
      ],
    },
  ],

  en: [
  ],

  jp: [
  ],
};

export default HomeData;
