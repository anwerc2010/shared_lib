import { baseApi } from './baseApi';
import { TrainingProgramsResponse, TrainingProgramRequest, TrainingProgram } from '../models/TrainingProgram';

export const trainingApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getTrainingPrograms: builder.query<TrainingProgramsResponse, void>({
            query: () => ({
                url: '/training-programs',
                method: 'GET',
            }),
        }),
        createTrainingProgram: builder.mutation<TrainingProgram, TrainingProgramRequest>({
            query: (body) => ({
                url: '/training-programs',
                method: 'POST',
                body,
            }),
        }),
    }),
});

export const { useGetTrainingProgramsQuery, useCreateTrainingProgramMutation } = trainingApi;
