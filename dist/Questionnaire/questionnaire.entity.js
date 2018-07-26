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
let QuestionnaireEntity = class QuestionnaireEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], QuestionnaireEntity.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], QuestionnaireEntity.prototype, "key", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], QuestionnaireEntity.prototype, "label", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], QuestionnaireEntity.prototype, "hint", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], QuestionnaireEntity.prototype, "type", void 0);
__decorate([
    typeorm_1.Column('jsonb'),
    __metadata("design:type", Object)
], QuestionnaireEntity.prototype, "ansOptions", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], QuestionnaireEntity.prototype, "order", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Boolean)
], QuestionnaireEntity.prototype, "required", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], QuestionnaireEntity.prototype, "domain", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], QuestionnaireEntity.prototype, "weight", void 0);
QuestionnaireEntity = __decorate([
    typeorm_1.Entity()
], QuestionnaireEntity);
exports.QuestionnaireEntity = QuestionnaireEntity;
//# sourceMappingURL=questionnaire.entity.js.map