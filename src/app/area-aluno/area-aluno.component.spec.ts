import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaAlunoComponent } from './area-aluno.component';

describe('AreaAlunoComponent', () => {
  let component: AreaAlunoComponent;
  let fixture: ComponentFixture<AreaAlunoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AreaAlunoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AreaAlunoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
