-- AlterTable
ALTER TABLE "products" ADD COLUMN     "menuId" INTEGER;

-- AddForeignKey
ALTER TABLE "products" ADD CONSTRAINT "products_menuId_fkey" FOREIGN KEY ("menuId") REFERENCES "menus"("id") ON DELETE SET NULL ON UPDATE CASCADE;
