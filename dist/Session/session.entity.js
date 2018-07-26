"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const questionnaireAnswer_entity_1 = require("../QuestionnaireAnswer/questionnaireAnswer.entity");
let SessionEntity = class SessionEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], SessionEntity.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], SessionEntity.prototype, "userId", void 0);
__decorate([
    typeorm_1.CreateDateColumn(),
    __metadata("design:type", Object)
], SessionEntity.prototype, "createDate", void 0);
__decorate([
    typeorm_1.UpdateDateColumn(),
    __metadata("design:type", Object)
], SessionEntity.prototype, "updateDate", void 0);
__decorate([
    typeorm_1.OneToMany(type => questionnaireAnswer_entity_1.QuestionnaireAnswerEntity, questionnaireAnswer => questionnaireAnswer.session),
    __metadata("design:type", Array)
], SessionEntity.prototype, "questionnaireAnswer", void 0);
SessionEntity = __decorate([
    typeorm_1.Entity()
], SessionEntity);
exports.SessionEntity = SessionEntity;
//# sourceMappingURL=session.entity.js.map