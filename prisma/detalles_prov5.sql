CREATE VIEW detalles_prov5 AS
SELECT ROW_NUMBER() OVER () AS id_detalle, product.nom_product, price_product, type_cat
FROM PRODUCT
INNER JOIN CATEGORY ON (cat_id1 = cat_id)
WHERE product.id_product > 5;