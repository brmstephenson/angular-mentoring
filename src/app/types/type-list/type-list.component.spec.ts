import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeListComponent } from './type-list.component';
import {By} from '@angular/platform-browser';

describe('TypeListComponent', () => {
  let component: TypeListComponent;
  let fixture: ComponentFixture<TypeListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypeListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('shows the expected types', () => {
    const expectedTypes = [
      'Fire',
      'Electric',
      'Water',
      'Rock',
      'Fighting'
    ];

    expect(component.types).toEqual(expectedTypes);
  });

  it('shows the types header', () => {
    const expectedHeader = 'Pokemon Types';
    const headingEl = fixture.debugElement.query(By.css('h2')).nativeElement;

    expect(headingEl.textContent).toEqual(expectedHeader);
  });
});
