import { Component } from '@angular/core';
import { Person } from '../app/app.person';
import { Resume } from '../app/mock-person-items'

@Component({
  selector: 'app-root',
  template: `<div>
                <h1>{{resume.sername | uppercase}} {{resume.name | lowercase}}  Сергеевна</h1>
                <h3>Разработчик ПО</h3>
                <hr>
                <img src="/assets/images/Photo.png">
                <table [ngClass]="{segoePrintFont:true}">
                  <tr><th>Мобильный телефон</th><td>+380 679280323</td></tr>
                  <tr><th>Эл. почта</th><td>alexzuck123@gmail.com</td></tr>
                  <tr><th>Возраст</th><td>24 года {{resume.dateofbirth | date:"shortDate"}}</td></tr>
                  <tr><th>Проживание</th><td>г. Кривой Рог</td></tr>
                  <tr><th>Гражданство</th><td>Украина</td></tr>
                  <tr><th>Языки</th><td>
                    <ul>
                      <li>Украинский (родной)</li>
                      <li>Русский</li>
                      <li>Английский (базовые знания)</li>
                    </ul>
                  </td></tr>
                  <tr><th>Образование</th><td>Высшее<br>2018 - Криворожский госудаственный педагогический университет. Математика, специальность "Математик. Преподаватель математики. Учитель информатики"</td></tr>
                  <tr><th>Опыт работы</th><td>2017 - продолжаю работать<br>КСШ №118<br>Учитель информатики</td></tr>
                  <tr><th>Занятость</th><td>{{resume.employmentpercentage | percent}}</td><tr>
                  <tr><th>Желаемая зарплата</th><td>{{resume.desiredsalary | currency: 'UAH':'symbol-narrow'}}</td><tr>
                  <tr><th>Навыки</th><td>
                      <ul class="skills">
                      <li *ngFor="let skill of resume.skills">
                        {{skill}}
                      </li>
                    </ul>
                  </td></tr>
                  <tr><th>Ссылка на GitHub</th><a href="https://github.com/AlexZuk123">https://github.com/AlexZuk123</a></tr>
                </table>
            </div>`,
  styles: [
    `h1, h3{
      font-family: "Lucida Sans Unicode", "Lucida Grande", Sans-Serif;
      color: #669;
    }
    table {
      font-family: "Lucida Sans Unicode", "Lucida Grande", Sans-Serif;
      font-size: 14px;
      background: url("https://html5book.ru/wp-content/uploads/2019/04/suggestions.png") 98% 86% no-repeat;
      max-width: 70%;
      width: 70%;
      border-collapse: collapse;
      text-align: left;
    }
    th {
      font-weight: normal;
      color: #039;
      border-bottom: 2px solid #6678b1;
      padding: 10px 8px;
    }
    td {
      color: #669;
      padding: 9px 8px;
      transition: .3s linear;
    }
    tr:hover td {
      color: #6699ff;
    }
    td {
      border-bottom: 1px solid #ccc;
      color: #669;
      padding: 9px 8px;
      transition: .3s linear;
    }
    tr:hover td {
      background: #e8edff;
    }
    img{
      width: 300px;
      float: right;
    }
    .verdanaFont{font-size:13px; font-family:"Verdana";}
    .segoePrintFont{font-size:14px; font-family:"Segoe Print";}`
  ]
})
export class AppComponent {
  title = 'Resume';
  resume = Resume;
  skills = Resume;
}
  