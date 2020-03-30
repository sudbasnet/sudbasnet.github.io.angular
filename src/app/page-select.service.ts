import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class PageSelectService {
    pageUpdated = new EventEmitter<string>();
}
