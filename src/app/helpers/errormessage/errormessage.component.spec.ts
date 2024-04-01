import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrormessageComponent } from './errormessage.component';
import { By } from '@angular/platform-browser';

describe('ErrormessageComponent', () => {
  let component: ErrormessageComponent;
  let fixture: ComponentFixture<ErrormessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ErrormessageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ErrormessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  /*******till here the code is the same for all testing files */
  it('create component', () => {
    expect(component).toBeTruthy();
  });

  it('renders default error state', () => {
    const  messageContainer = fixture.debugElement.query(
      By.css('[data-testid="message-container"]')
    );
    expect(messageContainer.nativeElement.textContent).toBe('Something went wrong');
  });

  it('renders custom error message', () => {
    component.message = 'Email is already taken';
    fixture.detectChanges();
    const  messageContainer = fixture.debugElement.query(
      By.css('[data-testid="message-container"]')
    );
    expect(messageContainer.nativeElement.textContent).toBe('Email is already taken');
  });


});
