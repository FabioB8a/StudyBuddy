import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudyhomePageComponent } from './studyhome-page.component';

describe('StudyhomePageComponent', () => {
  let component: StudyhomePageComponent;
  let fixture: ComponentFixture<StudyhomePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudyhomePageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StudyhomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
