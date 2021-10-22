import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JeuxListComponent } from './jeux-list.component';

describe('JeuxListComponent', () => {
  let component: JeuxListComponent;
  let fixture: ComponentFixture<JeuxListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JeuxListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JeuxListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Le component doit être créé', () => {
    expect(component).toBeTruthy();
  });

  it(`Doit avoir un titre 'Liste des jeux'`, () => {
    expect(component.pageTitle).toEqual('Liste des jeux');
  });
});
