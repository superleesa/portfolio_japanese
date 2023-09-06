const container = document.getElementById("projects-container")

// get project records from the database (or simulate it)
// should follow the format {name, year/date, description, links, tags}
records = [
    {name: "並列ランダムフォレストアルゴリズムの最適化",
    date: "2023 5月", description: "特徴フィルタリング、重み付き投票、並列化されたツリーフィッティングを組み込んだ、公開された研究に基づくより効率的なランダムフォレストアルゴリズムを実装しました。",
    link: "https://github.com/superleesa/fast_parallel_random_forest",
    tags: ["Python", "Machine Learning", "Random Forest", "Multiprocessing"]},

    {name: "PyTorch を用いた MLB 選手のデジタルエンゲージメント予測",
    date: "2023 8月",
    description: "ニューラルネットワークと LSTM のシーケンスを用いて、デジタルエンゲージ メントを予測する分類モデルを構築しました",
    link: "https://github.com/superleesa/mlb_digital_engagement_model", tags: ["Python", "Pytorch", "LSTM", "Machine Learning"]},

    {name: "カスタムエンコーダー・デコーダーのデザインと実装",
    date: "2023 5月",
    description: "bzipを参考に、効率的にテキストサイズを圧縮するzip機能をデザインし、Pythonで実装しました。",
    link: "https://github.com/superleesa/custom-bzip", tags: ["Python", "Zip Algorithm"]},

    {name: "R による湿度分類モデル",
    date: "2023 6月",
    description: "データクリーニング、特徴エンジニアリング、モデル作成、ハイパーパラメータ チューニング、ROC 分析を行い、湿度状態を予測する二値分類モデルを構築しました。",
    link: "https://github.com/superleesa/humidity_level_model", tags: ["R", "Machine Learning"]},

    {name: "カスタム ML アルゴリズムの実装",
    date: "2023 1月",
    description: "ニューラルネットワーク、ランダムフォレスト、kNN アルゴリズムをゼロから開発し、パフォーマンスを最適化し、過学習を防ぐテクニックを適用しました。",
    link: "https://github.com/superleesa/neural_network", tags: ["Python", "Machine Learning", "Neural Network", "kNN", "Random Forest"]},

    {name: "Spark、Kafka、MongoDB ストリームアプリケーション",
    date: "2023 7月",
    description: "PySpark と PyMongo でストリームアプリケーションを作成し、衛星やセンサー のストリーミングから火災検出とデータベースへの保存を行いました。",
    link: "https://github.com/superleesa/fire_stream_app", tags: ["Python", "Spark", "MongoDB"]},

    {name: "画像認識による脳腫瘍の分類モデル",
    date: "2023 8月",
    description: "Pytorchを使い、ResNetをファインチューンし、脳腫瘍の分類モデルを実装しました。",
    link: "https://github.com/superleesa/brain_tumor_classification_model", tags: ["Python", "Pytorch", "Deep Learning", "Image Recognition"]}
];

// add records to the page
records.forEach(record => {
    const recordDiv = document.createElement("div");
    recordDiv.classList.add("record")
    
    recordDiv.innerHTML = `
    <a href=${record.link} class="clickable-div">
        <h3>${record.name}</h3>
        <p>${record.date}</p>
        <p>${record.description}</p>
    </a>
    `

    container.appendChild(recordDiv)
})