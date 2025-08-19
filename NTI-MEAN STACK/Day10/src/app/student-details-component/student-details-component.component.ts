import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentsListComponentComponent } from '../students-list-component/students-list-component.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-student-details-component',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './student-details-component.component.html',
  styleUrl: './student-details-component.component.css'
})

export class StudentDetailsComponentComponent extends StudentsListComponentComponent implements
  OnChanges,
  OnInit,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy{
  student: any;
  constructor(private route: ActivatedRoute) {
    super();
    // const url = window.location.pathname; 
    // const parts = url.split('/');
    // const id = parts[parts.length - 1];

    const id = this.route.snapshot.paramMap.get('id');
    this.student = this.studentsInfo.find(u=>u.id===id);
    // console.log(this.student);
  }

  private log(hook: string, extra: unknown = ''): void {
    console.log(`${hook}`, extra, new Date().toISOString());
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.log('ngOnChanges',changes);
  }

  ngOnInit(): void {
    this.log('ngOnInit');
  }

  ngAfterContentInit(): void {
    this.log('ngAfterContentInit');
  }

  ngAfterViewInit(): void {
    this.log('ngAfterViewInit');
  }

  ngDoCheck(): void {
    this.log('ngDoCheck');
  }

  ngAfterContentChecked(): void {
    this.log('ngAfterContentChecked');
  }

  ngAfterViewChecked(): void {
    this.log('ngAfterViewChecked');
  }

  ngOnDestroy(): void {
    this.log('ngOnDestroy');
  }
}