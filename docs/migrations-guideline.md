# Migrations Guideline

## Introduction

Each change in entities should be accompanied by a new migration.
**DO NOT REMOVE PREVIOUS MIGRATIONS**

## Generating a new migration

Each migration should have a name that describes the changes in the migration.
For example, if you are adding a new column like `roles` to the `User` entity,
the migration name should be `add-roles-column-to-user`.

```bash
NAME=<migration-name> yarn migration:generate
```

Before merging new changes to `main` branch you should ensure that your migration
works properly with production database.
You can do it by running migration on production database.

## Reverting migration

Reverting a migration runs the `down` method in the migration file.
This is useful in case we made a schema change we no longer want.

### Source

- [typeorm-migrations-explained](https://betterprogramming.pub/typeorm-migrations-explained-fdb4f27cb1b3)
