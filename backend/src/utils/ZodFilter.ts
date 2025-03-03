import { ArgumentsHost, Catch, ExceptionFilter } from '@nestjs/common';
import { ZodError } from 'zod';

@Catch(ZodError)
export class ZodFilter<T extends ZodError> implements ExceptionFilter {
  catch(exception: T, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<{
      status: (code: number) => Record<string, (object: object) => void>;
    }>();
    const status = 400;
    response.status(status).json({
      errors: exception.errors,
      message: exception.message,
      statusCode: status,
    });
  }
}
