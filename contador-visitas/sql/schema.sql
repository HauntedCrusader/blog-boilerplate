CREATE TABLE IF NOT EXISTS contador_visitas (
    id SERIAL PRIMARY KEY,
    total_visitas INTEGER NOT NULL DEFAULT 0
);

INSERT INTO contador_visitas (id, total_visitas)
VALUES (1, 0)
ON CONFLICT (id) DO NOTHING;