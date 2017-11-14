import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Component, OnInit, NgModule, OnChanges, ViewEncapsulation, Input, Output, EventEmitter, ElementRef, AfterViewInit, Pipe, PipeTransform } from '@angular/core';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';
import { CommonModule }       from '@angular/common';
import { ClickOutsideDirective } from './clickOutside';

@Component({
  selector: 'app-hamburger',
  templateUrl: './hamburger.component.html',
  styleUrls: ['./hamburger.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HamburgerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
}
