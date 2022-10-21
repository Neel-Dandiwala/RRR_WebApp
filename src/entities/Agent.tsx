import { Entity, ObjectID, ObjectIdColumn, Column, BaseEntity, PrimaryGeneratedColumn, OneToMany, UpdateDateColumn, CreateDateColumn } from "typeorm";
import { Waste } from "./Waste";

@Entity()
export class Agent extends BaseEntity {

    @PrimaryGeneratedColumn()
    agentId!: number;

    @Column({ unique: true })
    agentName!: string;

    @Column({ unique: true })
    agentEmail!: string;

    @Column()
    agentPassword!: string;

    @Column()
    agentAge: number;

    @Column({ unique: true })
    agentMobile!: string;

    @Column()
    agentCity: string;

    @Column()
    agentState: string;

    @OneToMany(() => Waste, (waste) => waste.wasteAgent)
    agentWaste: Waste[];

    @CreateDateColumn()
    agentCreatedAt: Date;

    @UpdateDateColumn()
    agentUpdatedAt: Date;
}