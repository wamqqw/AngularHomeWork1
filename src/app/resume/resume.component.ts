import { Component } from '@angular/core';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent {
  title = "Resume";
  Name = "Timur"
  skills: string[] = [
    "C#",
    "C++",
    "MSSQL",
    "Unity",
    "Python",
    "ADO.NET"
  ]
}
