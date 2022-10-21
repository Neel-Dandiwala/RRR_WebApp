import { Field, Int, ObjectType } from "type-graphql";
import { Entity, Column, BaseEntity, PrimaryGeneratedColumn, UpdateDateColumn, CreateDateColumn } from "typeorm";

@ObjectType()
@Entity()
export class Company extends BaseEntity {

    @Field(() => Int)
    @PrimaryGeneratedColumn()
    companyId!: number;

    @Field()
    @Column({ unique: true })
    companyName!: string;

    @Field()
    @Column({ unique: true })
    companyEmail!: string;

    @Field()
    @Column()
    companyPassword!: string;

    @Field()
    @Column()
    companyPaperPrice: number;

    @Field(() => Int)
    @Column()
    companyPlasticPrice: number;

    @Field(() => Int)
    @Column()
    companyElectronicPrice: number;

    @Field()
    @Column()
    companyAddress!: string;

    @Field()
    @Column()
    companyCity: string;

    @Field()
    @Column()
    companyState: string;

    @Field(() => String)
    @CreateDateColumn()
    companyCreatedAt: Date;

    @Field(() => String)
    @UpdateDateColumn()
    companyUpdatedAt: Date;
}