import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchMeetingsComponent } from './search-meetings.component';

describe('SearchMeetingsComponent', () => {
  let component: SearchMeetingsComponent;
  let fixture: ComponentFixture<SearchMeetingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchMeetingsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchMeetingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
