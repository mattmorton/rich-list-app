import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RichListItemComponent } from './rich-list-item.component';

describe('RichListItemComponent', () => {
  let component: RichListItemComponent;
  let fixture: ComponentFixture<RichListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RichListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RichListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
