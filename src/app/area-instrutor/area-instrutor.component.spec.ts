import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaInstrutorComponent } from './area-instrutor.component';

describe('AreaInstrutorComponent', () => {
  let component: AreaInstrutorComponent;
  let fixture: ComponentFixture<AreaInstrutorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AreaInstrutorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AreaInstrutorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
