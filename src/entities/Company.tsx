import { Entity, Column, BaseEntity, PrimaryGeneratedColumn, UpdateDateColumn, CreateDateColumn } from "typeorm";

@Entity()
export class Company extends BaseEntity {

    @PrimaryGeneratedColumn()
    companyId!: number;

    @Column({ unique: true })
    companyName!: string;

    @Column({ unique: true })
    companyEmail!: string;

    @Column()
    companyPassword!: string;

    @Column()
    companyPaperPrice: number;

    @Column()
    companyPlasticPrice: number;

    @Column()
    companyElectronicPrice: number;

    @Column()
    companyAddress!: string;

    @Column()
    companyCity: string;

    @Column()
    companyState: string;

    @CreateDateColumn()
    companyCreatedAt: Date;

    @UpdateDateColumn()
    companyUpdatedAt: Date;
}