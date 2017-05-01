class Main {
	// ランダムに選択する文字群
	texts:string[] = [
		"ブ",
		"ー",
		"！",class Main {
			// ランダムに選択する文字群
			texts:string[] = [
				"ブ",
				"ー",
				"！",
				"バ",
				"ン",
				"ゥ",
				"ボ",
				"オ"
			];
			// ランダムに選択する文字の数
			textCount:number = this.texts.length;
			// ツイートするテキスト
			tweetText:string = "";
			// ツイートする文字数。50文字以上100文字未満
			outputNum:number = 50 * (Math.random() + 1);
			// 生成した文字列を表示するテキストエリア。
			outputArea:HTMLTextAreaElement;

			constructor() {
				this.outputArea = <HTMLTextAreaElement> document.getElementById("outputArea");
				this.createTweetText();
				this.manageButtons();
			}

			/**
			 * ツイート文字列を生成する。
			 */
			private createTweetText():void {
				this.tweetText = "";
				for (let i:number = 0; i < this.outputNum; i++) {
					this.tweetText += this.getText();
				}

				this.displayOutPutText();
			}

			/**
			 * ランダムにつなげる文字を取得する。
			 */
			private getText():string {
				return this.texts[Math.floor(Math.random() * this.textCount)]
			}

			/**
			 * テキストエリアに文字を表示する。
			 */
			private displayOutPutText():void {
				this.outputArea.value = this.tweetText;
			}

			/**
			 * ボタンのイベント設定
			 */
			private manageButtons():void {
				// 文字列を再生成するボタン
				document.getElementById("generateButton").addEventListener("click", () => this.createTweetText());
				// 生成した文字列をツイートするボタン
				document.getElementById("tweetButton").addEventListener("click", () => {
					window.open("https://twitter.com/intent/tweet?text=" + this.tweetText + " : &hashtags=ンボォJS版 http://jsdo.it/tonkotsuboy/04Ko");
				});
			}
		}

// ウインドウロード完了時にMainクラスを実行する。
		window.addEventListener("load", () => new Main());


	"バ",
		"ン",
		"ゥ",
		"ボ",
		"オ"
	];
	// ランダムに選択する文字の数
	textCount:number = this.texts.length;
	// ツイートするテキスト
	tweetText:string = "";
	// ツイートする文字数。50文字以上100文字未満
	outputNum:number = 50 * (Math.random() + 1);
	// 生成した文字列を表示するテキストエリア。
	outputArea:HTMLTextAreaElement;

	constructor() {
		this.outputArea = <HTMLTextAreaElement> document.getElementById("outputArea");
		this.createTweetText();
		this.manageButtons();
	}

	/**
	 * ツイート文字列を生成する。
	 */
	private createTweetText():void {
		this.tweetText = "";
		for (let i:number = 0; i < this.outputNum; i++) {
			this.tweetText += this.getText();
		}

		this.displayOutPutText();
	}

	/**
	 * ランダムにつなげる文字を取得する。
	 */
	private getText():string {
		return this.texts[Math.floor(Math.random() * this.textCount)]
	}

	/**
	 * テキストエリアに文字を表示する。
	 */
	private displayOutPutText():void {
		this.outputArea.value = this.tweetText;
	}

	/**
	 * ボタンのイベント設定
	 */
	private manageButtons():void {
		// 文字列を再生成するボタン
		document.getElementById("generateButton").addEventListener("click", () => this.createTweetText());
		// 生成した文字列をツイートするボタン
		document.getElementById("tweetButton").addEventListener("click", () => {
			window.open("https://twitter.com/intent/tweet?text=" + this.tweetText + " : &hashtags=ンボォJS版 http://jsdo.it/tonkotsuboy/04Ko");
		});
	}
}

// ウインドウロード完了時にMainクラスを実行する。
window.addEventListener("load", () => new Main());

