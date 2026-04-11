import { Injectable, CanActivate, ExecutionContext, UnauthorizedException } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class ClientAccessGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();
    const accessKey = request.headers['x-access-key'];

    if (accessKey !== 'CINE2026') {
      throw new UnauthorizedException('Acesso negado. Código de acesso do cinema inválido ou ausente.');
    }

    return true;
  }
}
