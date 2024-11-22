import { inject, Injectable } from '@angular/core';
import { HttpClient, HttpContext } from "@angular/common/http";
import { Observable } from "rxjs";
import { takeUntilDestroyed} from "@angular/core/rxjs-interop";

@Injectable({
  providedIn: 'root'
})
export abstract class BaseService<T> {

  readonly #http = inject(HttpClient);

  post(url: string, i: T, options?: any): Observable<T> {
    return this.#http.post<T>(url, i, {
      ...options,
    }).pipe(takeUntilDestroyed()) as Observable<T>;
  }

  put(url: string, i: T, options?: any): Observable<T> {
    return this.#http.put<T>(url, i, {
      ...options,
    }).pipe(takeUntilDestroyed()) as Observable<T>;
  }

  patch(url: string, i: T, options?: any, ifSkipLoading?: boolean): Observable<T> {
    return this.#http.patch<T>(url, i, {
      ...options,
    }).pipe(takeUntilDestroyed()) as Observable<T>;
  }

  get(url: string, options?: any): Observable<T> {
    return this.#http.get<T>(url, {
      ...options,
    }).pipe(takeUntilDestroyed()) as Observable<T>;
  }

  getAll(url: string, options?: any): Observable<T[]> {
    return this.#http.get<T[]>(url, {
      ...options,
    })/*.pipe(takeUntilDestroyed())*/ as unknown as Observable<T[]>; //todo
  }

  delete(url: string): Observable<T> {
    return this.#http.delete(url, {
    }).pipe(takeUntilDestroyed()) as Observable<T>;
  }
}
