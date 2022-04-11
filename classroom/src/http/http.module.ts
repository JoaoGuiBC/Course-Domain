import path from 'node:path';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ApolloDriver } from '@nestjs/apollo';
import { GraphQLModule } from '@nestjs/graphql';

import { DatabaseModule } from '../database/database.module';

import { CoursesResolver } from './graphql/resolvers/courses.resolver';
import { CoursesService } from '../services/courses.service';

import { EnrollmentsResolver } from './graphql/resolvers/enrollments.resolver';
import { EnrollmentsService } from '../services/enrollments.service';

import { StudentsResolver } from './graphql/resolvers/students.resolver';
import { StudentsService } from '../services/students.service';

@Module({
  imports: [
    ConfigModule.forRoot(),
    DatabaseModule,
    GraphQLModule.forRoot({
      driver: ApolloDriver,
      autoSchemaFile: path.resolve(process.cwd(), 'src/schema.gql'),
    }),
  ],
  providers: [
    // Resolvers
    CoursesResolver,
    EnrollmentsResolver,
    StudentsResolver,

    // Services
    CoursesService,
    EnrollmentsService,
    StudentsService,
  ],
})
export class HttpModule {}
