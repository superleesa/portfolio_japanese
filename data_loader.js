const container = document.getElementById("projects-container")
// get project records from the database (or simulate it)
// should follow the format {name, year/date, description, links, tags}
records = [
    {name: "並列ランダムフォレストアルゴリズムの最適化",
    date: "2023 5月", description: "特徴フィルタリング、重み付き投票、並列化されたツリーフィッティングを組み込んだ、公開された研究に基づくより効率的なランダムフォレストアルゴリズムを実装しました。",
    link: "https://github.com/superleesa/fast_parallel_random_forest",
    tags: new Set(["Python", "Machine Learning", "Random Forest", "Multiprocessing"])},

    {name: "PyTorch を用いた MLB 選手のデジタルエンゲージメント予測",
    date: "2023 8月",
    description: "ニューラルネットワークと LSTM のシーケンスを用いて、デジタルエンゲージ メントを予測する分類モデルを構築しました。",
    link: "https://github.com/superleesa/mlb_digital_engagement_model", tags: new Set(["Python", "Pytorch", "LSTM", "Machine Learning"])},

    {name: "カスタムエンコーダー・デコーダーのデザインと実装",
    date: "2023 5月",
    description: "bzipを参考に、効率的にテキストサイズを圧縮するzip機能をデザインし、Pythonで実装しました。",
    link: "https://github.com/superleesa/custom-bzip", tags: new Set(["Python", "Zip Algorithm"])},

    {name: "R による湿度分類モデル",
    date: "2023 6月",
    description: "データクリーニング、特徴エンジニアリング、モデル作成、ハイパーパラメータ チューニング、ROC 分析を行い、湿度状態を予測する二値分類モデルを構築しました。",
    link: "https://github.com/superleesa/humidity_level_model", tags: new Set(["R", "Machine Learning"])},

    {name: "カスタム ML アルゴリズムの実装",
    date: "2023 1月",
    description: "ニューラルネットワーク、ランダムフォレスト、kNN アルゴリズムをゼロから開発し、パフォーマンスを最適化し、過学習を防ぐテクニックを適用しました。",
    link: "https://github.com/superleesa/neural_network", tags: new Set(["Python", "Machine Learning", "Neural Network", "kNN", "Random Forest"])},

    {name: "Spark、Kafka、MongoDB ストリームアプリケーション",
    date: "2023 7月",
    description: "PySpark と PyMongo でストリームアプリケーションを作成し、衛星やセンサー のストリーミングから火災検出とデータベースへの保存を行いました。",
    link: "https://github.com/superleesa/fire_stream_app", tags: new Set(["Python", "Spark", "MongoDB"])},

    {name: "画像認識による脳腫瘍の分類モデル",
    date: "2023 8月",
    description: "Pytorchを使い、ResNetをファインチューンし、脳腫瘍の分類モデルを実装しました。",
    link: "https://github.com/superleesa/brain_tumor_classification_model", tags: new Set(["Python", "Pytorch", "Deep Learning", "Image Recognition"])}
];


// a function for filtering records
const filterRecords = (turnedOnButtons, recordElements) => {
    recordElements.forEach(record => {
        record.classList.remove("active-record")
    })
    
    selectedRecords = recordElements.filter(recordElement => {
        
        for (let tag of turnedOnButtons){
            if (!records[recordElement.getAttribute("data-index")].tags.has(tag)){
                return false;
            }
            
        }
        return true;
    })
    
    selectedRecords.forEach(record =>{
        record.classList.add("active-record")
    })
}

// collect all tags
all_tags = new Set()
records.forEach(record => {
    tags = record.tags
    tags.forEach(tag => {
        all_tags.add(tag);
    })
})

// add filter container to DOM
const filtersContainer = document.getElementById("filters-container");
all_tags.forEach(tag => {
    const button = document.createElement('button');
    
    button.className = 'filter-button';
    button.setAttribute('data-tag', tag);
    button.textContent = tag; // Set the button's text
    
    
    filtersContainer.appendChild(button);
})


// add records to DOM
current_id = 0  // assignn unique id to each project
recordElements = []
records.forEach(record => {
    const recordDiv = document.createElement("div");
    recordDiv.classList.add("record");
    recordDiv.classList.add("active-record");
    recordDiv.setAttribute("data-index", current_id);
    recordElements.push(recordDiv);
    current_id++;

    recordDiv.innerHTML = `
    <a href=${record.link} class="clickable-div">
        <h3>${record.name}</h3>
        <p>${record.date}</p>
        <p>${record.description}</p>
        <div style="background-color:transparent;
         display:flex;
         justify-content:flex-start;
         gap: 5px;flex-wrap:wrap">${[...record.tags].map(tag => `<div style="border:solid 0.5px;">${tag}</div>`).join()}</div>
    </a>
    `

    container.appendChild(recordDiv)
})


// add event listener to the filter container (uses delegation)
const turnedOnButtons = new Set();
filtersContainer.addEventListener("click", (event) => {
    if (!(event.target && event.target.classList.contains("filter-button"))){
        return;
    }

    // if a filter is clicked
    const button = event.target;
    const tag = button.getAttribute("data-tag");

    if (turnedOnButtons.has(tag)) {
        turnedOnButtons.delete(tag);
        button.classList.remove("active-filter");
    }else {
        turnedOnButtons.add(tag);
        button.classList.add("active-filter");
    }

    filterRecords(turnedOnButtons, recordElements);

})

// add hide/open the filter tool pane
const filterPane = document.getElementById("filters-pane-opener");
filterPane.addEventListener("click", () => {
    const filtersContainer = document.getElementById("filters-pane");

    const current_block_type = filtersContainer.style.display
    if (current_block_type === "none"){
        filtersContainer.style.display = "block";
    }else{
        filtersContainer.style.display = "none";
    }
})