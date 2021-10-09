import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Init } from '../init-todos';

@Injectable()
export class QuizService extends Init {
  JSONDatas = [
    { "id": "Open" },
    { "id": "OpenNew", "label": "Open New" },
    { "id": "ZoomIn", "label": "Zoom In" },
    { "id": "ZoomOut", "label": "Zoom Out" },
    { "id": "Find", "label": "Find..." },
    { "id": "FindAgain", "label": "Find Again" },
    { "id": "Copy" },
    { "id": "CopyAgain", "label": "Copy Again" },
    { "id": "CopySVG", "label": "Copy SVG" },
    { "id": "ViewSVG", "label": "View SVG" }
  ]




  constructor(private http: HttpClient) {
    super();

    this.load()
    localStorage.setItem("datas", JSON.stringify(this.JSONDatas));

    let data = JSON.parse(localStorage.getItem("datas"));
  }

  get(url: string) {
    return this.http.get(url);
  }

  getAll() {
    return [
      { id: 'data/javascript.json', name: 'JavaScript' },
      { id: 'data/aspnet.json', name: 'Asp.Net' },
      { id: 'data/csharp.json', name: 'C Sharp' }
    ];
  }

}
