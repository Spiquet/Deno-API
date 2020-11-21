import { Column, Entity, PrimaryColumn, } from 'https://denolib.com/denolib/typeorm@v0.2.23-rc6/mod.ts';


@Entity()
export class User {
    @PrimaryColumn()
    id!: number;

    @Column("varchar", { length: 30 })
    name!: string;
}