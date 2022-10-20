import { Entity, ObjectID, ObjectIdColumn, Column, BaseEntity, PrimaryGeneratedColumn, OneToMany, UpdateDateColumn, CreateDateColumn } from "typeorm";
import { Waste } from "./Waste";

@Entity()
export class User extends BaseEntity {

    @PrimaryGeneratedColumn()
    userId!: number;

    @Column({ unique: true })
    userName!: string;

    @Column({ unique: true })
    userEmail!: string;

    @Column()
    userPassword!: string;

    @Column()
    userAge: number;

    @Column()
    userAddress!: string;

    @Column({ unique: true })
    userMobile!: string;

    @Column()
    userCity: string;

    @Column()
    userState: string;

    @OneToMany(() => Waste, (waste) => waste.userOwner)
    userWaste: Waste[];

    @CreateDateColumn()
    userCreatedAt: Date;

    @UpdateDateColumn()
    userUpdatedAt: Date;
}