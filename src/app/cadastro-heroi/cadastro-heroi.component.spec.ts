import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroHeroiComponent } from './cadastro-heroi.component';

describe('CadastroHeroiComponent', () => {
  let component: CadastroHeroiComponent;
  let fixture: ComponentFixture<CadastroHeroiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CadastroHeroiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastroHeroiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
