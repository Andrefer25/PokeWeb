import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditnoticiaComponent } from './editnoticia.component';

describe('EditnoticiaComponent', () => {
  let component: EditnoticiaComponent;
  let fixture: ComponentFixture<EditnoticiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditnoticiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditnoticiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
