const AboutData = {
  kr: [
    // SECTION 1
    {
      id: "kr-home-intro",
      title: "상상을 현실로, SSeries입니다.",
      logoPath: "./sseries.png",
      description: [
        {
          logoPath: "./logo/dev.png",
          title: "Developer",
          data: `제 모든 창작활동의 정체성이자, 본업입니다.
          떠오른 아이디어를 실제로 구현하는 과정을 좋아합니다.
          예술과 창작활동, 그리고 경험을 제공하는 콘텐츠를 만듭니다.`,
          urlPath: null,
        },
        {
          logoPath: "./logo/video.png",
          title: "Video Creator",
          data: `추억 기록, 작업물 홍보, 창작욕구 만족 등을 위해 영상을 제작합니다.
          제 영상편집 능력이 필요하다면, 부업으로 편집자 역할도 맡을 수 있습니다.`,
          urlPath: null,
        },
        {
          logoPath: "./logo/music.png",
          title: "Music Creator",
          data: `아직은 학생 수준의 취미이지만, 자신만의 색을 표현하고자 합니다.
          언젠가 자신 있게 ‘크리에이터’라 말할 수 있는 날을 목표로 하고 있습니다.`,
          urlPath: null,
        },
        {
          logoPath: "./logo/paint.png",
          title: "Painting",
          data: `순수한 열망에서 시작한 취미입니다.
          좋아하는 것과 상상, 그리고 가끔은 망상을 그림으로 표현합니다.`,
          urlPath: null,
        },
      ],
    },

    // SECTION 2
    {
      id: "kr-home-works",
      title: "제 작업물을 소개합니다",
      logoPath: "./logo/work.png",
      description: [
        {
          logoPath: "./logo/works/wuwa.png",
          title: `띵조 DEV - WuWa 스펙카드 생성기`,
          data: `[ React | OCR(PaddleOCR) | Cloudflare R2 ]
          [ Vercel | GitHub Actions | Python(Pillow) ]
          Wuthring Waves의 인게임 스펙을 계산할 수 있는 서비스입니다.
          백엔드 서버에서 OCR 기능을 제공해, 스펙 입력을 쉽게 할 수 있고,
          멤버쉽 기능을 도입해 지속 가능한 서비스를 운영합니다.`,
          urlPath: "https://wuwa.dev/",
        },
        {
          logoPath: "./logo/works/remind.png",
          title: "Project Re:Mind - 리듬게임 프로젝트",
          data: `[ Unity (URP, Custom Editor) | ASP.NET Core ]
          [ EF Core | SQLite | log4net | Cloudflare ]
          PC에서 플레이할 수 있는 무료 리듬게임입니다.
          게임의 시스템을 체계적으로 구성하고, 유저데이터를 서버에서 처리합니다.
          음악은 작곡가들에게 비상업적 사용허가를 받았고, 직접 작곡한 곡도 있습니다.`,
          urlPath: "https://github.com/S-Series/ReMind-Editor-V2",
        },
      ],
    },

    // SECTION 3
    {
      id: "kr-home-about",
      title: "SSeries에 관한 이야기",
      logoPath: null,
      description: [
        {
          logoPath: "./logo/dev.png",
          title: "작업 방향 및 철학",
          data: `각각의 기능들을 구조화하고, 구조들을 쌓아올리는 방향으로 작업합니다.
          유저의 경험을 최우선으로 작업하며, 각 기능을 명확하게 표현하고자 합니다.`,
        },
        {
          logoPath: "./logo/dream.png",
          title: "이루고자 하는 것",
          data: `크리에이터, 아티스트, 개발자... 보다는 나만의 세상을 만들고 싶습니다.
          상상과 망상, 혹은 꿈 같은것을 현실 세계에 모종의 형태로 구현하고자 합니다.
          본인도 잘 설명할 수 없는 자신의 마음과 생각을, 예술의 형태로 승화하고 싶습니다.`,
        },
        {
          logoPath: "./logo/approach.png",
          title: "SSeries의 작업 방식",
          data: `작업을 할 때 기능 혹은 레이어 단위로 분해하고, 구조를 쌓는 방식으로 접근합니다.
          항상 어디서나 아이디어를 생각하고, 기록하고, 구현할 수 있는 최소 단위부터 만들어 나갑니다.
          이는 창작활동에서도 같은 방식으로 접근하며, 이미지나 소리 등을 형태로 만들어 나갑니다.`,
        },
        {
          logoPath: "./logo/value.png",
          title: "중요하게 생각하는 가치관",
          data: `저는 창작이 단순히 만드는 것이 아니라, "경험"을 만드는것이라 생각합니다.
          감정이나 생각, 아이디어를 구조화해, 누군가에게 닿는 형태로 전달하고 싶습니다.
          완성도만큼이나 중요한것은, 실험 정신과 전달하고자 하는 메세지라고 믿습니다.`,
        },
      ],
    },
  ],

  en: [
    // SECTION 1
    {
      id: "en-home-intro",
      title: "Imagination to Reality - I'm SSeries",
      logoPath: "./sseries.png",
      description: [
        {
          logoPath: "./logo/dev.png",
          title: "Developer",
          data: `This is the core identity of all my creative activities—and also my profession.
        I enjoy turning ideas into real, functioning products.
        I create experiences through software, art, and various forms of digital content.`,
          urlPath: null,
        },
        {
          logoPath: "./logo/video.png",
          title: "Video Creator",
          data: `I produce videos to capture memories, promote my work, and satisfy my creative urges.
        If needed, I can also take on freelance editing tasks.`,
          urlPath: null,
        },
        {
          logoPath: "./logo/music.png",
          title: "Music Creator",
          data: `It is still at a hobby level, but I aim to develop my own musical color.
        My goal is to confidently call myself a “creator” one day.`,
          urlPath: null,
        },
        {
          logoPath: "./logo/paint.png",
          title: "Painting",
          data: `A hobby that began from pure passion.
        I express things I love, my imagination, and sometimes my delusions through illustration.`,
          urlPath: null,
        },
      ],
    },

    // SECTION 2
    {
      id: "en-home-works",
      title: "Introducing my works",
      logoPath: "./logo/work.png",
      description: [
        {
          logoPath: "./logo/works/wuwa.png",
          title: "WuWa DEV - WuWa Spec Card Generator",
          data: `[ React | OCR (PaddleOCR) | Cloudflare R2 ]
        [ Vercel | GitHub Actions | Python (Pillow) ]
        A service that calculates in-game stats for Wuthering Waves.
        The backend provides OCR functionality to simplify data input,
        and a membership system enables sustainable service operation.`,
          urlPath: "https://wuwa.dev/",
        },
        {
          logoPath: "./logo/works/remind.png",
          title: "Project Re:Mind - Rhythm Game Project",
          data: `[ Unity (URP, Custom Editor) | ASP.NET Core ]
        [ EF Core | SQLite | log4net | Cloudflare ]
        A free rhythm game playable on PC.
        The system is built with a structured approach, and user data is handled server-side.
        Some songs are licensed for non-commercial use, and some are composed by me.`,
          urlPath: "https://github.com/S-Series/ReMind-Editor-V2",
        },
      ],
    },

    // SECTION 3
    {
      id: "en-home-about",
      title: "About SSeries",
      logoPath: null,
      description: [
        {
          logoPath: "./logo/dev.png",
          title: "Creative Direction & Philosophy",
          data: `I work by organizing functionalities and building systems layer by layer.
        I prioritize user experience and aim to express each feature with clarity.`,
        },
        {
          logoPath: "./logo/dream.png",
          title: "What I Aim to Achieve",
          data: `Rather than simply being a creator, artist, or developer,
        I want to build a world of my own.
        I want to transform imagination, delusion, and dreamlike ideas
        into something that takes shape in the real world.`,
        },
        {
          logoPath: "./logo/approach.png",
          title: "My Approach to Work",
          data: `I break down features and layers when working, and build structures from the ground up.
        I constantly think, record, and develop ideas, starting from the smallest possible unit.
        This approach applies to creative activities as well, shaping visuals and sound step by step.`,
        },
        {
          logoPath: "./logo/value.png",
          title: "Values I Care About",
          data: `To me, creation is not just “making things”—it's creating an experience.
        I want to organize emotions, thoughts, and ideas into structures
        that can be delivered meaningfully to someone.
        Beyond polish and completeness, I believe experimentation
        and intention are equally important.`,
        },
      ],
    },
  ],

  jp: [
    // SECTION 1
    {
      id: "jp-home-intro",
      title: "想像を現実にする、SSeriesです。",
      logoPath: "./sseries.png",
      description: [
        {
          logoPath: "./logo/dev.png",
          title: "Developer",
          data: `僕の創作活動の中心であり、本業でもあります。
        思いついたアイデアを実際に形にしていく工程がすごく好きです。
        ソフトウェアやアートなど、いろいろな形で“体験”を作っています。`,
          urlPath: null,
        },
        {
          logoPath: "./logo/video.png",
          title: "Video Creator",
          data: `思い出の記録、作品の宣伝、ただの創作欲など、
        いろんな理由で動画を制作しています。
        必要であれば、編集のお仕事もお受けできます。`,
          urlPath: null,
        },
        {
          logoPath: "./logo/music.png",
          title: "Music Creator",
          data: `まだ学生レベルの趣味ですが、自分らしい音を探しています。
        いつか胸を張って「クリエイターです」と言える日を目指しています。`,
          urlPath: null,
        },
        {
          logoPath: "./logo/paint.png",
          title: "Painting",
          data: `純粋な“好き”から始まった趣味です。
        好きなものや想像、時には妄想まで、絵として表現しています。`,
          urlPath: null,
        },
      ],
    },

    // SECTION 2
    {
      id: "jp-home-works",
      title: "僕の作品を紹介します",
      logoPath: "./logo/work.png",
      description: [
        {
          logoPath: "./logo/works/wuwa.png",
          title: "WuWa DEV - WuWa ステータスカード生成ツール",
          data: `[ React | OCR (PaddleOCR) | Cloudflare R2 ]
        [ Vercel | GitHub Actions | Python (Pillow) ]
        Wuthering Waves のステータスを計算できるサービスです。
        バックエンドで OCR を提供し、入力の手間を大きく減らしています。
        また、メンバーシップ機能を導入し、持続的に運営できる形を目指しています。`,
          urlPath: "https://wuwa.dev/",
        },
        {
          logoPath: "./logo/works/remind.png",
          title: "Project Re:Mind - リズムゲームプロジェクト",
          data: `[ Unity (URP, Custom Editor) | ASP.NET Core ]
        [ EF Core | SQLite | log4net | Cloudflare ]
        PC向けの無料リズムゲームです。
        ゲームシステムをしっかり構築し、ユーザーデータはサーバー側で管理しています。
        楽曲は非商用利用の許可をいただいたものや、自作曲も含まれています。`,
          urlPath: "https://github.com/S-Series/ReMind-Editor-V2",
        },
      ],
    },

    // SECTION 3
    {
      id: "jp-home-about",
      title: "SSeriesについて",
      logoPath: null,
      description: [
        {
          logoPath: "./logo/dev.png",
          title: "制作方針と哲学",
          data: `機能を整理し、レイヤーごとに積み重ねていくような形で制作しています。
        ユーザー体験を最優先に、ひとつひとつの要素を分かりやすく表現することを心がけています。`,
        },
        {
          logoPath: "./logo/dream.png",
          title: "目指しているもの",
          data: `クリエイター、アーティスト、開発者… という肩書きよりも、
        自分だけの“世界”を作りたいと思っています。
        想像や妄想、夢みたいなものを現実の形に落とし込むことに興味があります。`,
        },
        {
          logoPath: "./logo/approach.png",
          title: "制作のアプローチ",
          data: `作業するときは、機能やレイヤーを細かく分けて構造を組み立てます。
        常にアイデアを考えて、記録して、小さな単位から実装していきます。
        この考え方は創作にも同じで、画像や音を少しずつ形にしていきます。`,
        },
        {
          logoPath: "./logo/value.png",
          title: "大切にしている価値観",
          data: `僕にとって創作は、ただ“作ること”ではなく「体験を作ること」です。
        感情や考えを構造化し、誰かに届く形で伝えたいと思っています。
        完成度も大事ですが、同じくらい挑戦する姿勢や伝えたいメッセージも重要だと思っています。`,
        },
      ],
    },
  ],
};

export default AboutData;
