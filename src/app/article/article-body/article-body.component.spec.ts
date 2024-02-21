import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleBodyComponent } from './article-body.component';

describe('ArticleBodyComponent', () => {
  let component: ArticleBodyComponent;
  let fixture: ComponentFixture<ArticleBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArticleBodyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ArticleBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
