import { Module } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { JwtModule } from '@nestjs/jwt'
import { PassportModule } from '@nestjs/passport'
import { Env } from 'src/env'

@Module({
  imports: [
    PassportModule,
    JwtModule.registerAsync({
      inject: [ConfigService],
      useFactory: (configService: ConfigService<Env, true>) => {
        const secret = configService.get('JWT_SECRET', { infer: true })

        return {
          secret,
          signOptions: { expiresIn: '1d' },
        }
      },
    }),
  ],
})
export class AuthModule {}
