import { AppError } from './../app-error/app-error';
import { BadRequestError } from './../app-error/bad-request-error';
import { NotFoundError } from './../app-error/not-found-error';
import { map, catchError } from 'rxjs/operators';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { errorHandler } from '@angular/platform-browser/src/browser';
import { throwError } from 'rxjs';

@Injectable()

export class PostsService{
	private baseURL = "http://jsonplaceholder.typicode.com/posts";

	constructor(private http : Http){
	}

	getPosts(){
		return this.http.get(this.baseURL);
	}

	deletePost(id){
		return this.http.delete(this.baseURL+'/'+id).pipe(catchError(this.handleError));
	}

	private handleError(error: Response){
		if(error.status === 404){
			return throwError(new NotFoundError(error));
		}

		if(error.status === 400){
			return throwError(new BadRequestError(error));
		}

		return throwError(new AppError(error.json()));
	}
}