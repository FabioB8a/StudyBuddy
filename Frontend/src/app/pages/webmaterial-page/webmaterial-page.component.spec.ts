import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebmaterialPageComponent } from './webmaterial-page.component';

describe('WebmaterialPageComponent', () => {
  let component: WebmaterialPageComponent;
  let fixture: ComponentFixture<WebmaterialPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WebmaterialPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WebmaterialPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
