import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BandasComponent } from './bandas';

describe('BandasComponent', () => {
  let component: BandasComponent;
  let fixture: ComponentFixture<BandasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BandasComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BandasComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
