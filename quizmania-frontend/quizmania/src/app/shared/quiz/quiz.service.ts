import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/toPromise";
import "rxjs/add/observable/empty";

@Injectable()
export class QuizService {
  private endURL = "";
  constructor(private http: HttpClient) {}

  // gets all quiizes depending on user id and type
  getAll(userid): Observable<any> {
    console.log("in quiz service ts " + userid);
    this.endURL = "http://localhost:8080/quizmania/" + userid + "/viewQuizzes";
    console.log("done in quiz service");
    return this.http.get(this.endURL);
  }

  // resturns quesion for given quiz
  getAllQuestions(userid, quizid): Observable<any> {
    console.log("in quiz service ts, getting questions for quiz " + quizid);
    this.endURL =
      "http://localhost:8080/quizmania/" + userid + "/viewquiz/" + quizid;
    return this.http.get(this.endURL);
  }
<<<<<<< HEAD

  getQuizCategories(): Observable<any> {
    console.log('getting quizcategories');
    this.endURL = 'http://localhost:8080/quizmania/examinee/quizCategories/';
    return this.http.get(this.endURL);
  }
  getQuizByCategory(quizId): Observable<any> {
    console.log('getting quizzess');
    this.endURL = 'http://localhost:8080/quizmania/quizByCategory/'+quizId;
    return this.http.get(this.endURL);
  }

=======
>>>>>>> branch 'fixedConflicts_master' of https://github.com/shubhra11mishra/quizmania.git
}
