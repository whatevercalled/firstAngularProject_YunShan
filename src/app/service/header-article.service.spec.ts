import { TestBed } from '@angular/core/testing';

import { HeaderArticleService } from './header-article.service';

describe('HeaderArticleService', () => {
  let service: HeaderArticleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HeaderArticleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
