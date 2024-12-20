# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

## [2.1.0](https://www.github.com/skillmatedev/api/compare/v2.0.0...v2.1.0) (2024-11-21)


### Features

* **mail:** adding  unsub mail ([81b9642](https://www.github.com/skillmatedev/api/commit/81b9642fb94b460d7dc7bc14db90e1a093844159))


### Bug Fixes

* add fullname field in unsub mail to users ([f281401](https://www.github.com/skillmatedev/api/commit/f281401bd6ea1138ffcda98658412ff6b3a047ec))
* **mail:** mail api for mentors ([a004857](https://www.github.com/skillmatedev/api/commit/a0048575303de960549d3aa3dfba79957f91ccb2))

## [2.0.0](https://www.github.com/skillmatedev/api/compare/v1.0.7...v2.0.0) (2024-10-02)


### ⚠ BREAKING CHANGES

* **survey:** Use mailGen to send mail to admin and ejs to account holder and jobPortal completed

### Features

* **model:** adding of deny and survey db ([e493517](https://www.github.com/skillmatedev/api/commit/e4935178509be83b0a27fcb0bee53a6e3b633350))
* **survey:** mail setup for survey ([6c4e798](https://www.github.com/skillmatedev/api/commit/6c4e7983de7a33e1f7d43750de342cd048378b0d))


### Bug Fixes

* **faq:** faq bugs are cleared ([12a62e6](https://www.github.com/skillmatedev/api/commit/12a62e64e42542a1698f904082fa600d4cc2ec9c))
* **job_applied:** admin will get the mail intementation ([c22e963](https://www.github.com/skillmatedev/api/commit/c22e96374fa0935bf872b4e7c6385b7ad8affda6))
* **survey:** add `isInterested` field to differentiate surveys ([655a669](https://www.github.com/skillmatedev/api/commit/655a669f6148a43dbb5eb44762cfa02ae17dbf61))
* update env in `mailGen` and update model to service to type `array` ([3b51617](https://www.github.com/skillmatedev/api/commit/3b5161714ce59e6f3be1c9f82b2515af780281a8))

### [1.0.7](https://github.com-work/skillmatedev/api/compare/v1.0.6...v1.0.7) (2024-09-19)


### Bug Fixes

* change subject in job-apply and update terms in the ejs file ([26610f1](https://github.com-work/skillmatedev/api/commit/26610f12cde089808587bcddcdff713fa5dee801))
* mail for admin while applying for job

### [1.0.6](https://github.com-work/skillmatedev/api/compare/v1.0.5...v1.0.6) (2024-09-17)


### Bug Fixes

* **email:** update email credentials for mail services ([c6f13ec](https://github.com-work/skillmatedev/api/commit/c6f13ec7fbab49729ad3c56942c5501a73d88caa))

### [1.0.5](https://github.com-work/skillmatedev/api/compare/v1.0.3...v1.0.5) (2024-09-09)


### Bug Fixes

* added comments that passes to ejs file ([593b734](https://github.com-work/skillmatedev/api/commit/593b73408fb9a1dacf2a8f0bf8eb1057a765205c))
* mail owner changes to skillmate career ([ca02eff](https://github.com-work/skillmatedev/api/commit/ca02eff1295186ad26d01e03519b36dfbaf49095))
* removed extras spaces to remove more button in the mail ([0226ad4](https://github.com-work/skillmatedev/api/commit/0226ad4895fb3f563365870b0747ec61aeda64a4))

### [1.0.4](https://github.com-work/skillmatedev/api/compare/v1.0.3...v1.0.4) (2024-09-01)


### Bug Fixes

* added comments that passes to ejs file ([593b734](https://github.com-work/skillmatedev/api/commit/593b73408fb9a1dacf2a8f0bf8eb1057a765205c))
* mail owner changes to skillmate career ([ca02eff](https://github.com-work/skillmatedev/api/commit/ca02eff1295186ad26d01e03519b36dfbaf49095))
* removed extras spaces to remove more button in the mail ([0226ad4](https://github.com-work/skillmatedev/api/commit/0226ad4895fb3f563365870b0747ec61aeda64a4))

### [1.0.3](https://github.com-work/skillmatedev/api/compare/v1.0.2...v1.0.3) (2024-08-30)


### Bug Fixes

* resume upload and download functionality done ([4c6fef6](https://github.com-work/skillmatedev/api/commit/4c6fef65341e5564f356e466f1d11c141497b23c))
* speicfy db in production ([9ad6295](https://github.com-work/skillmatedev/api/commit/9ad6295780f13878e99a4df7e5b81687d68bebd0))

### [1.0.2](https://github.com-work/skillmatedev/api/compare/v1.0.1...v1.0.2) (2024-08-28)


### Bug Fixes

* backend env configuration and connection message with PORT ([3eeaf79](https://github.com-work/skillmatedev/api/commit/3eeaf79f336431b604ffa4995ac09e992ff78d9b))
* return url changes ([9c0c729](https://github.com-work/skillmatedev/api/commit/9c0c729ae4fd1e0661276f3271b18537ff3bc240))

### 1.0.1 (2024-08-17)


### Features

* create DB models for mail and faq mail 6f88fca
* create email and resume upload functions 9cca103
* create email templates 95991bf
* create public dir and gitignore 132749f
* initial project setup and create app routes 61ff933
