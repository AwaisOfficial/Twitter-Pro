import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowMemberProfileComponent } from './show-member-profile.component';

describe('ShowMemberProfileComponent', () => {
  let component: ShowMemberProfileComponent;
  let fixture: ComponentFixture<ShowMemberProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowMemberProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowMemberProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
