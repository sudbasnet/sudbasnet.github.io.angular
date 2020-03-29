import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class DialogService {
    questionUpdated = new EventEmitter<string>();
    tabSelected = new EventEmitter<string>();
}
