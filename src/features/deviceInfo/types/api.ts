import { z } from 'zod';

export const deviceInfoSchema = z
  .object({
    data: z
      .object({
        name: z.string().optional(),
        // capacity: z.string().optional(),
        // 'capacity GB': z.string().optional(),
        // 'Case Size': z.string().optional(),
        // Color: z.string().optional(),
        // color: z.string().optional(),
        // 'Cpu Model': z.string().optional(),
        // Generation: z.string().optional(),
        // generation: z.string().optional(),
        // 'Harddisk Size': z.string().optional(),
        // Description: z.string().optional(),
        // price: z.number().optional(),
        // Price: z.number().optional(),
        // 'Screen size': z.string().optional(),
        // 'Strap Colour': z.string().optional(),
        // year: z.number().optional(),
      })
      .nonstrict(), // To allow additional unspecified fields
  })
  .nonstrict(); // To allow additional unspecified fields

export type DeviceInfoForm = z.infer<typeof deviceInfoSchema>;
