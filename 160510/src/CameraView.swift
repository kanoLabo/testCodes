//
//  CameraView.swift
//  Tsudaryass2016
//
//  Created by 鹿野壮 on 2016/05/09.
//  Copyright © 2016年 鹿野壮. All rights reserved.
//

import UIKit
import TwitterKit

class CameraView: UIViewController {

    override func viewDidLoad() {
        super.viewDidLoad()
        print("ViewController/viewDidLoad/インスタンス化された直後（初回に一度のみ）")
        createTweetButton();

    }

    override func viewWillAppear(animated: Bool) {
        super.viewDidDisappear(animated)
        print("ViewController/viewWillAppear/画面が表示される直前")
    }

    override func viewDidAppear(animated: Bool) {
        super.viewDidAppear(animated)
        print("ViewController/viewDidAppear/画面が表示された直後")
    }

    override func viewWillDisappear(animated: Bool) {
        super.viewWillDisappear(animated)
        print("ViewController/viewWillDisappear/別の画面に遷移する直前")
    }

    override func viewDidDisappear(animated: Bool) {
        super.viewDidDisappear(animated)
        print("ViewController/viewDidDisappear/別の画面に遷移した直後")
    }


    func createTweetButton() -> Void {

        print("create tapped");


        let myButton: UIButton = UIButton();
        myButton.frame = CGRectMake(0, 0, 200, 50);
        myButton.layer.position = CGPointMake(self.view.frame.width / 2, self.view.frame.height / 2);
        myButton.layer.cornerRadius = 10;
        myButton.backgroundColor = UIColor.blueColor();
        myButton.setTitle("ツイートする", forState: .Normal);
        myButton.addTarget(self, action: #selector(CameraView.onTapTweetButton), forControlEvents: .TouchUpInside)
        self.view.addSubview(myButton);
    }

    func onTapTweetButton() -> Void {

        print("tweet tapped");

        let endPoint = "https://api.twitter.com/1.1/statuses/update.json"
        let parameters = ["status": "\(arc4random() % 10000)"]

        if let userID = Twitter.sharedInstance().sessionStore.session()?.userID {
            let client = TWTRAPIClient(userID: userID)

            let request: NSURLRequest = client.URLRequestWithMethod("POST", URL: endPoint, parameters: parameters, error: nil)
            client.sendTwitterRequest(request, completion: {
                (TWTRNetworkCompletion) -> Void in
                // 送信完了
                print("送信完了")
            })
            print("clicked");
        } else {
            print("not autherd!");
        }
    }


    /*
    // MARK: - Navigation

    // In a storyboard-based application, you will often want to do a little preparation before navigation
    override func prepareForSegue(segue: UIStoryboardSegue, sender: AnyObject?) {
        // Get the new view controller using segue.destinationViewController.
        // Pass the selected object to the new view controller.
    }
    */

}
