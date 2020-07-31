import { inject, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { RoazhonService } from '@sixense/ds-roazhon-service';
import { routerMock } from '@tests/mocks/router/router.spec';
import { AuthGuard } from './auth.guard';

describe('AuthGuard', () => {
  let roazhonService: RoazhonService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [
        AuthGuard,
        {
          provide: RoazhonService,
          useFactory: () => ({ isLogged: jest.fn() })
        },
        { provide: Router, useValue: routerMock }
      ]
    });
  });

  beforeEach(() => {
    roazhonService = TestBed.get(RoazhonService);
  });

  it('should ...', inject([AuthGuard], (guard: AuthGuard) => {
    expect(guard).toBeTruthy();
  }));

  describe('canActivate function', () => {
    it('should allow access to the login page', inject(
      [AuthGuard],
      (guard: AuthGuard) => {
        jest.spyOn(roazhonService, 'isLogged').mockImplementation(() => false);

        expect(guard).toBeTruthy();
      }
    ));

    it('should allow user navigation', inject(
      [AuthGuard],
      (guard: AuthGuard) => {
        jest.spyOn(roazhonService, 'isLogged').mockImplementation(() => true);

        expect(guard).toBeTruthy();
      }
    ));
  });
});
